import axios from "axios";
import { axiosCancel } from "../store/store";
import { MessageBox } from "element-ui";

const CancelToken = axios.CancelToken;

// 取消所有进行中的请求
function cancelRequest() {
    axiosCancel._axiosPromiseCancel.forEach(e => {
        e && e();
    });
    axiosCancel._axiosPromiseCancel = [];
}

function language() {
    if(localStorage.getItem("open_locale")){
        if(localStorage.getItem("open_locale") == "en"){
            return "en"
        }else{
            return "Zh"
        }
    }else{
        return "Zh"
    }
}

const client = axios.create({
    crossDomain: true,
    withCredentials: true,
    baseURL: process.env.VUE_APP_apiURL,
    headers: {
        Language: language()
        // Language: localStorage.getItem("locale") || "en"
    }
})

client.interceptors.request.use(
    config => {
        config.cancelToken = new CancelToken(cancel => {
            axiosCancel._axiosPromiseCancel.push(cancel);
        });
        if (localStorage.token) {
            //判断token是否存在
            config.headers.token = localStorage.token; //将token设置成请求头
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
client.interceptors.response.use(
    response => {
        if (response.data.code === 403) {
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
            this.$store.state.userInfo = {};
            cancelRequest();
            MessageBox.alert(response.data.msg, {
                type: "error",
                closeOnClickModal: false,
                callback: () => window.history.go(0)
            });
        }
        return response;
    },
    error => {
        if (axios.isCancel(error)) {
            // 为了终结promise链 就是实际请求 不会走到.catch(rej=>{});这样就不会触发错误提示之类了。
            return new Promise(() => { });
        } else {
            return Promise.reject(error);
        }
    }
);

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        client
            .get(url, { params: params })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject({ code: -1, msg: error.message });
            });
    });
}

export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        client
            .post(url, params)
            .then(response => {
                const result = response.data;
                if (result.code !== 200 && result.code !== 403)
                    reject({ code: result.code, msg: result.msg });
                resolve(result);
            })
            .catch(error => {
                reject({ code: -1, msg: error.msg });
            });
    });
}

export function put(url, params = {}) {
    return new Promise((resolve, reject) => {
        client
            .put(url, params)
            .then(response => {
                const result = response.data;
                if (result.code !== 200 && result.code !== 403) {
                    reject({ code: result.code, msg: result.msg });
                    MessageBox.alert(result.msg, {
                        type: "error",
                        closeOnClickModal: true
                    });
                }
                resolve(result);
            })
            .catch(error => {
                reject({ code: -1, msg: error.msg });
            });
    });
}

export function del(url, params = {}) {
    return new Promise((resolve, reject) => {
        client.defaults.headers.contentType = "application/x-www-form-urlencode";
        client
            .delete(url, { data: params })
            .then(response => {
                const result = response.data;
                if (result.code !== 200 && result.code !== 403) {
                    reject({ code: result.code, msg: result.msg });
                    MessageBox.alert(result.msg, {
                        type: "error",
                        closeOnClickModal: true
                    });
                }
                resolve(result);
            })
            .catch(error => {
                reject({ code: -1, msg: error.message });
            });
    });
}

export function getJson(url, params = {}) {
    client.defaults.responseType = "json";
    return new Promise((resolve, reject) => {
        get(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
                MessageBox.alert(err.msg, {
                    type: "error",
                    closeOnClickModal: true
                });
            });
    });
}

export function getBlob(url, params = {}) {
    return new Promise((resolve, reject) => {
        client.defaults.responseType = "blob";
        client
            .get(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject({ code: -1, msg: error.message });
            });
    });
}

export function postBlob(url, params = {}) {
    return new Promise((resolve, reject) => {
        client.defaults.responseType = "blob";
        client
            .post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject({ code: -1, msg: error.msg });
            });
    });
}

export function postJson(url, params = {}) {
    return new Promise((resolve, reject) => {
        post(url, params)
            .then(res => resolve(res.data))
            .catch(err => {
                reject(err);
                if (err.code >= 400 && err.code < 500) {
                    MessageBox.alert(err.msg, {
                        type: "error",
                        closeOnClickModal: true
                    });
                } else {
                    MessageBox.alert("远程服务器出错", {
                        type: "error",
                        closeOnClickModal: true
                    });
                }
            });
    });
}

export default { get, post, put, del, getJson, postJson };
