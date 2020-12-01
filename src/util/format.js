import numeral from "numeral";

export  function formatMoney(money) {
    return numeral(money).format("0,0.00") + " ₱";
}