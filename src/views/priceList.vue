<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    type="index">
            </el-table-column>
            <el-table-column
                    prop="Provider"
                    label="Provider">
            </el-table-column>
            <el-table-column
                    prop="SKU"
                    label="SKU">
            </el-table-column>
            <el-table-column
                    prop="Name"
                    label="Name">
            </el-table-column>
            <el-table-column
                    prop="Description"
                    label="Description">
            </el-table-column>
            <el-table-column
                    prop="ValidityDays"
                    label="ValidityDays">
            </el-table-column>
            <el-table-column
                    prop="Amount"
                    label="Amount">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "priceList",
        data(){
            return{
                tableData:[{
                    "Provider": "GLOBE",
                    "SKU": "A20ML",
                    "Name": "TM - A20ML",
                    "Description": "100 MB Mobile Legends + 200 MB Data",
                    "ValidityDays": 2,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "A20WP",
                    "Name": "TM - A20WP",
                    "Description": "100 MB Wattpad + 200 MB Data",
                    "ValidityDays": 2,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "A20YT",
                    "Name": "TM - A20YT",
                    "Description": "100 MB YouTube + 200 MB Data",
                    "ValidityDays": 2,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "ASTIGITXT20",
                    "Name": "TM - ASTIGITXT20",
                    "Description": "30 Texts To All Network and International Texts To 49 Countries.",
                    "ValidityDays": 1,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CHATPLUS25",
                    "Name": "GP - CHATPLUS25",
                    "Description": "15 IDD minutes to the US Mainland and Canada & Access to Facebook Messenger, Viber, WhatsApp, Google Messenger, LINE, Kakao Talk and WeChat",
                    "ValidityDays": 1,
                    "Amount": 25.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CMSURF10",
                    "Name": "CHERRY - CMSURF10",
                    "Description": "150 MB internet surfing",
                    "ValidityDays": 1,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CMSURF199",
                    "Name": "CHERRY - CMSURF199",
                    "Description": "2 GB internet surfing",
                    "ValidityDays": 60,
                    "Amount": 199.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CMSURF20",
                    "Name": "CHERRY - CMSURF20",
                    "Description": "350 MB internet surfing",
                    "ValidityDays": 7,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CMSURF299",
                    "Name": "CHERRY - CMSURF299",
                    "Description": "3 GB internet surfing",
                    "ValidityDays": 60,
                    "Amount": 299.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CMSURF399",
                    "Name": "CHERRY - CMSURF399",
                    "Description": "4 GB internet surfing",
                    "ValidityDays": 60,
                    "Amount": 399.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CMSURF499",
                    "Name": "CHERRY - CMSURF499",
                    "Description": "6 GB internet surfing",
                    "ValidityDays": 60,
                    "Amount": 499.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CMSURF50",
                    "Name": "CHERRY - CMSURF50",
                    "Description": "900 MB internet surfing",
                    "ValidityDays": 30,
                    "Amount": 50.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CMSURF99",
                    "Name": "CHERRY - CMSURF99",
                    "Description": "1.7 GB internet surfing",
                    "ValidityDays": 30,
                    "Amount": 99.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "COMBO20",
                    "Name": "TM - COMBO20",
                    "Description": "Unlimited all net texts, 120 minutes call to Globe and TM",
                    "ValidityDays": 3,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "COMBOALL10",
                    "Name": "TM - COMBOALL10",
                    "Description": "Unlimited Calls & Text Messages To TM/Globe, 50 Text Messages To All Networks",
                    "ValidityDays": 1,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "CU10",
                    "Name": "TM - CU10",
                    "Description": "Unlimited Globe/TM call ka na + 100text to all network",
                    "ValidityDays": 2,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "EZ70",
                    "Name": "TM - EZ70",
                    "Description": "1GB mobile data + 1GB/day for choice of app bundle + unli allnet texts",
                    "ValidityDays": 7,
                    "Amount": 70.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "FB30",
                    "Name": "TM - FB30",
                    "Description": "Unlimited text to all networks + 300 MB Facebook",
                    "ValidityDays": 3,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "FB50",
                    "Name": "TM - FB50",
                    "Description": "Unlimited text to all networks + 500 MB Facebook",
                    "ValidityDays": 5,
                    "Amount": 50.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "FUNSAGADFBIG",
                    "Name": "TM - FUNSAGADFBIG",
                    "Description": "400MB FB+IG",
                    "ValidityDays": 0,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "FUNSAGADIWCODM",
                    "Name": "TM - FUNSAGADIWCODM",
                    "Description": "400MB iWant+Call of Duty",
                    "ValidityDays": 0,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "FUNSAGADTIKWS",
                    "Name": "TM - FUNSAGADTIKWS",
                    "Description": "400MB TikTok+WeSing",
                    "ValidityDays": 0,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "FUNSAGADYTML",
                    "Name": "TM - FUNSAGADYTML",
                    "Description": "400MB YouTube+ML",
                    "ValidityDays": 0,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GO120",
                    "Name": "GP - GO120",
                    "Description": "10GB of open access data, 2GB of free GoWiFi access, Unlimited texts to all networks, Unlimited calls to Globe and TM",
                    "ValidityDays": 7,
                    "Amount": 120.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GO140",
                    "Name": "GP - GO140",
                    "Description": "11GB of open access data, 2GB of free GoWiFi access, Unlimited texts to all networks, Unlimited calls to Globe and TM",
                    "ValidityDays": 7,
                    "Amount": 140.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GO50",
                    "Name": "GP - GO50",
                    "Description": "5GB of open access data, 1GB of free GoWiFi access, Unlimited texts to all networks",
                    "ValidityDays": 3,
                    "Amount": 50.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GO90",
                    "Name": "GP - GO90",
                    "Description": "8GB of open access data, 1GB of free GoWiFi access, Unlimited texts to all networks",
                    "ValidityDays": 7,
                    "Amount": 90.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOALL20",
                    "Name": "GP - GOALL20",
                    "Description": "Unlimited texts to ALL NETWORKS, 30 minutes of calls to Globe/TM numbers, FREE access to Facebook",
                    "ValidityDays": 2,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURF10",
                    "Name": "GP - GOSURF10",
                    "Description": "40MB mobile data (open access)",
                    "ValidityDays": 1,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURF15",
                    "Name": "GP - GOSURF15",
                    "Description": "100MB mobile data (open access), Free 30MB for Instagram",
                    "ValidityDays": 2,
                    "Amount": 15.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURF299",
                    "Name": "GP - GOSURF299",
                    "Description": "2GB mobile data (open access), 10GB access to your choice of GoWATCH&PLAY (WNP), GoSHARE&SHOP (SNS), or GoLIVE&DISCOVER, 1GB GoWiFi (hotspot) access",
                    "ValidityDays": 30,
                    "Amount": 299.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURF30",
                    "Name": "GP - GOSURF30",
                    "Description": "150 MB Mobile Data, 50 MB Facebook, Viber, Snapchat or Pokemon GO",
                    "ValidityDays": 2,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURF50",
                    "Name": "GP - GOSURF50",
                    "Description": "1GB mobile data (open access) + Unli All-Net Texts, 1GB per day for your choice of GoWATCH&PLAY (WNP), GoSHARE&SHOP (SNS), or GoLIVE&DISCOVER, 1GB GoWiFi (hotspot) access",
                    "ValidityDays": 3,
                    "Amount": 50.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURF599",
                    "Name": "GP - GOSURF599",
                    "Description": "5GB mobile data (open access), 10GB access to your choice of GoWATCH&PLAY (WNP), GoSHARE&SHOP (SNS), or GoLIVE&DISCOVER, 1GB GoWiFi (hotspot) access",
                    "ValidityDays": 30,
                    "Amount": 599.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURF999",
                    "Name": "GP - GOSURF999",
                    "Description": "10GB mobile data (open access), 10GB access to your choice of GoWATCH&PLAY (WNP), GoSHARE&SHOP (SNS), or GoLIVE&DISCOVER, 1GB GoWiFi (hotspot) access",
                    "ValidityDays": 30,
                    "Amount": 999.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURFMB10",
                    "Name": "TM - GOSURFMB10",
                    "Description": "Consumable 40MB mobile internet",
                    "ValidityDays": 1,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURFMB15",
                    "Name": "TM - GOSURFMB15",
                    "Description": "Consumable 40MB with FREE 30MB of Snapchat",
                    "ValidityDays": 2,
                    "Amount": 15.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURFMB30",
                    "Name": "TM - GOSURFMB30",
                    "Description": "Consumable 150MB + 50MB for 1 chosen freebie",
                    "ValidityDays": 2,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOSURFMB50",
                    "Name": "TM - GOSURFMB50",
                    "Description": "Consumable 700MB + 300MB for 1 chosen freebie",
                    "ValidityDays": 3,
                    "Amount": 50.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOTIPIDD100",
                    "Name": "GP - GOTIPIDD100",
                    "Description": "Call 200+ countries for as low as P2.50/min for only P100 valid for 15 days.",
                    "ValidityDays": 15,
                    "Amount": 100.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOTIPIDD30",
                    "Name": "GP - GOTIPIDD30",
                    "Description": "Call 200+ countries for as low as P2.50/min for only P30 valid for 3 days.",
                    "ValidityDays": 3,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOTIPIDD50",
                    "Name": "GP - GOTIPIDD50",
                    "Description": "Call 200+ countries for as low as P2.50/min for only P50 valid for 3 days.",
                    "ValidityDays": 7,
                    "Amount": 50.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOTSCOMBODD70",
                    "Name": "GP - GOTSCOMBODD70",
                    "Description": "1GB data + Unli texts to all networks + 1GB GoWiFi Access + free GCash QR voucher + FREE 1GB/day GoSHARE&SHOP and GoWATCH&PLAY.",
                    "ValidityDays": 7,
                    "Amount": 70.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOTSCOMBODD90",
                    "Name": "GP - GOTSCOMBODD90",
                    "Description": "2GB data + Unli texts to all networks + 1GB GoWiFi Access + free GCash QR voucher + FREE 1GB/day for GoSHARE&SHOP and GoWATCH&PLAY",
                    "ValidityDays": 7,
                    "Amount": 90.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOTXT20",
                    "Name": "GP - GOTXT20",
                    "Description": "Unli allnet SMS + 20MB, P20 valid 3days",
                    "ValidityDays": 3,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOUNLI20",
                    "Name": "GP - GOUNLI20",
                    "Description": "Unlimited calls to Globe and TM (Touch Mobile), Unlimited texts to all networks, 20MB mobile data",
                    "ValidityDays": 1,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOUNLI20PLUS",
                    "Name": "GP - GOUNLI20PLUS",
                    "Description": "Unlimited calls to Globe/TM, 20MB of data for mobile surfing, and 50 texts to all networks",
                    "ValidityDays": 1,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOUNLI25",
                    "Name": "GP - GOUNLI25",
                    "Description": "Unlimited calls to Globe/TM, Unlimited texts to all networks, and Unlimited Viber access",
                    "ValidityDays": 1,
                    "Amount": 25.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOUNLI50",
                    "Name": "GP - GOUNLI50",
                    "Description": "Unli Calls to GP/TM,  Unli Allnet texts + 50MB, P50 for 3 days",
                    "ValidityDays": 3,
                    "Amount": 50.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOUNLIALL20",
                    "Name": "GP - GOUNLIALL20",
                    "Description": "Unlimited SMS to All Networks, 15 Minutes of Calls to Air",
                    "ValidityDays": 1,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOUNLITXT15",
                    "Name": "GP - GOUNLITXT15",
                    "Description": "Unlimited texts to all networks, 30MB mobile data",
                    "ValidityDays": 3,
                    "Amount": 15.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GOWATCH99",
                    "Name": "GP - GOWATCH99",
                    "Description": "2.5GB mobile data for video streaming, GoWATCH99 lets you access video streaming apps such as YouTube, Netflix, iflix, Viu, iWant, VLive, NBA, and ONE Super App (premium subscriptions not included)",
                    "ValidityDays": 3,
                    "Amount": 99.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GYRO_GANDA15",
                    "Name": "CHERRY - GYRO_GANDA15",
                    "Description": "250MB mobile data",
                    "ValidityDays": 3,
                    "Amount": 15.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GYRO_GANDA30",
                    "Name": "CHERRY - GYRO_GANDA30",
                    "Description": "550MB mobile data",
                    "ValidityDays": 7,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "GYRO_GANDA60",
                    "Name": "CHERRY - GYRO_GANDA60",
                    "Description": "1.3GB mobile data",
                    "ValidityDays": 15,
                    "Amount": 60.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "HOMESURF1499",
                    "Name": "GP - HOMESURF1499",
                    "Description": "100GB of open access data, 30GB of free data (1GB per daily for 30 days) for YouTube",
                    "ValidityDays": 30,
                    "Amount": 1499.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "HOMESURF15",
                    "Name": "GP - HOMESURF15",
                    "Description": "1GB of open access data",
                    "ValidityDays": 1,
                    "Amount": 15.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "HOMESURF199",
                    "Name": "GP - HOMESURF199",
                    "Description": "15GB of open access data, 1GB of free data (1GB per daily for 7 days) for YouTube",
                    "ValidityDays": 7,
                    "Amount": 199.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "HOMESURF599",
                    "Name": "GP - HOMESURF599",
                    "Description": "40GB of open access data, 15GB of free data (1GB per daily for 15 days) for YouTube",
                    "ValidityDays": 15,
                    "Amount": 599.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "HOMESURF999",
                    "Name": "GP - HOMESURF999",
                    "Description": "70GB of open access data, 30GB of free data (1GB per daily for 30 days) for YouTube",
                    "ValidityDays": 30,
                    "Amount": 999.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "HOMEWATCH1499",
                    "Name": "GP - HOMEWATCH1499",
                    "Description": "80GB + 120GB (4GB per day for 30 days)",
                    "ValidityDays": 30,
                    "Amount": 1499.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "HOMEWATCH199",
                    "Name": "GP - HOMEWATCH199",
                    "Description": "6GB + 28GB (4GB per day for 7 days)",
                    "ValidityDays": 7,
                    "Amount": 199.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "HOMEWATCH599",
                    "Name": "GP - HOMEWATCH599",
                    "Description": "15GB + 60GB (4GB per day for 15 days)",
                    "ValidityDays": 15,
                    "Amount": 599.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "HOMEWATCH999",
                    "Name": "GP - HOMEWATCH999",
                    "Description": "20GB + 120GB (4GB per day for 30 days)",
                    "ValidityDays": 30,
                    "Amount": 999.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "KSURF10",
                    "Name": "ABS - KSURF10",
                    "Description": "50MB data allocation + Full access to iWant TV",
                    "ValidityDays": 1,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "KSURF15",
                    "Name": "ABS - KSURF15",
                    "Description": "150MB data allocation + Full access to iWant TV",
                    "ValidityDays": 3,
                    "Amount": 15.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "KSURF199",
                    "Name": "ABS - KSURF199",
                    "Description": "2.5B data allocation + Full access to iWant TV",
                    "ValidityDays": 30,
                    "Amount": 199.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "KSURF30",
                    "Name": "ABS - KSURF30",
                    "Description": "300MB data allocation",
                    "ValidityDays": 30,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "KSURF99",
                    "Name": "ABS - KSURF99",
                    "Description": "1GB data allocation + Full access to iWant TV",
                    "ValidityDays": 30,
                    "Amount": 99.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "KTAN15",
                    "Name": "ABS - KTAN15",
                    "Description": "75 texts to all networks",
                    "ValidityDays": 2,
                    "Amount": 15.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "KTAN30",
                    "Name": "ABS - KTAN30",
                    "Description": "150 texts to all networks",
                    "ValidityDays": 5,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "KTAN5",
                    "Name": "ABS - KTAN5",
                    "Description": "20 texts to all networks",
                    "ValidityDays": 1,
                    "Amount": 5.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "KTANU10",
                    "Name": "ABS - KTANU10",
                    "Description": "Unli texts to ABS-CBN Mobile, Globe, Smart, Sun, Talk ‘N Text and TM",
                    "ValidityDays": 1,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD10",
                    "Name": "Regular Load 10",
                    "Description": "Regular Load 10",
                    "ValidityDays": 365,
                    "Amount": 10.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD100",
                    "Name": "Regular Load 100",
                    "Description": "Regular Load 100",
                    "ValidityDays": 365,
                    "Amount": 100.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD110",
                    "Name": "GP/ABS/CHERRY/TM - LD110",
                    "Description": "Regular Load 110",
                    "ValidityDays": 365,
                    "Amount": 110.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD120",
                    "Name": "GP/ABS/CHERRY/TM - LD120",
                    "Description": "Regular Load 120",
                    "ValidityDays": 365,
                    "Amount": 120.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD130",
                    "Name": "GP/ABS/CHERRY/TM - LD130",
                    "Description": "Regular Load 130",
                    "ValidityDays": 365,
                    "Amount": 130.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD140",
                    "Name": "GP/ABS/CHERRY/TM - LD140",
                    "Description": "Regular Load 140",
                    "ValidityDays": 365,
                    "Amount": 140.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD150",
                    "Name": "GP/ABS/CHERRY/TM - LD150",
                    "Description": "Regular Load 150",
                    "ValidityDays": 365,
                    "Amount": 150.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD20",
                    "Name": "Regular Load 20",
                    "Description": "Regular Load 20",
                    "ValidityDays": 365,
                    "Amount": 20.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD30",
                    "Name": "Regular Load 30",
                    "Description": "Regular Load 30",
                    "ValidityDays": 365,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD300",
                    "Name": "GP/ABS/CHERRY/TM - LD300",
                    "Description": "Regular Load 300",
                    "ValidityDays": 365,
                    "Amount": 300.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD350",
                    "Name": "GP/ABS/CHERRY/TM - LD350",
                    "Description": "Regular Load 350",
                    "ValidityDays": 365,
                    "Amount": 350.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD40",
                    "Name": "Regular Load 40",
                    "Description": "Regular Load 40",
                    "ValidityDays": 365,
                    "Amount": 40.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD450",
                    "Name": "GP/ABS/CHERRY/TM - LD450",
                    "Description": "Regular Load 450",
                    "ValidityDays": 365,
                    "Amount": 450.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD5",
                    "Name": "GP/ABS/CHERRY/TM - LD5",
                    "Description": "Regular Load 5",
                    "ValidityDays": 365,
                    "Amount": 5.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD50",
                    "Name": "Regular Load 50",
                    "Description": "Regular Load 50",
                    "ValidityDays": 365,
                    "Amount": 50.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD500",
                    "Name": "GP/ABS/CHERRY/TM - LD500",
                    "Description": "Regular Load 500",
                    "ValidityDays": 365,
                    "Amount": 500.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD550",
                    "Name": "GP/ABS/CHERRY/TM - LD550",
                    "Description": "Regular Load 550",
                    "ValidityDays": 365,
                    "Amount": 550.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD60",
                    "Name": "Regular Load 60",
                    "Description": "Regular Load 60",
                    "ValidityDays": 365,
                    "Amount": 60.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD600",
                    "Name": "GP/ABS/CHERRY/TM - LD600",
                    "Description": "Regular Load 600",
                    "ValidityDays": 365,
                    "Amount": 600.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD70",
                    "Name": "Regular Load 70",
                    "Description": "Regular Load 70",
                    "ValidityDays": 365,
                    "Amount": 70.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD700",
                    "Name": "GP/ABS/CHERRY/TM - LD700",
                    "Description": "Regular Load 700",
                    "ValidityDays": 365,
                    "Amount": 700.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD80",
                    "Name": "Regular Load 80",
                    "Description": "Regular Load 80",
                    "ValidityDays": 365,
                    "Amount": 80.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD90",
                    "Name": "Regular Load 90",
                    "Description": "Regular Load 90",
                    "ValidityDays": 365,
                    "Amount": 90.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "LD900",
                    "Name": "GP/ABS/CHERRY/TM - LD900",
                    "Description": "Regular Load 900",
                    "ValidityDays": 365,
                    "Amount": 900.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "TIPIDD30",
                    "Name": "TM - TIPIDD30",
                    "Description": "4 IDD minutes call",
                    "ValidityDays": 1,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "TRINET15",
                    "Name": "CHERRY - TRINET15",
                    "Description": "All day texts + 30 mins calls to Cherry, Globe, TM",
                    "ValidityDays": 3,
                    "Amount": 15.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "TRITEXT5",
                    "Name": "CHERRY - TRITEXT5",
                    "Description": "All day texts to Cherry, Globe and TM",
                    "ValidityDays": 1,
                    "Amount": 5.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "UNLICALL15",
                    "Name": "TM - UNLICALL15",
                    "Description": "Unlimited call to all Globe and TM",
                    "ValidityDays": 1,
                    "Amount": 15.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "USSDGOTIPIDD100",
                    "Name": "GP - USSDGOTIPIDD100",
                    "Description": "Call 200+ countries for as low as P2.50/min for only P100 valid for 15 days.",
                    "ValidityDays": 15,
                    "Amount": 100.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "USSDGOTIPIDD30",
                    "Name": "GP - USSDGOTIPIDD30",
                    "Description": "Call 200+ countries for as low as P2.50/min for only P30 valid for 3 days.",
                    "ValidityDays": 3,
                    "Amount": 30.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "USSDGOTIPIDD50",
                    "Name": "GP - USSDGOTIPIDD50",
                    "Description": "Call 200+ countries for as low as P2.50/min for only P50 valid for 3 days.",
                    "ValidityDays": 7,
                    "Amount": 50.00
                }, {
                    "Provider": "GLOBE",
                    "SKU": "USSDGOUNLI30",
                    "Name": "GP - USSDGOUNLI30",
                    "Description": "Unli Calls to GP/TM, Unli Allnet texts, +Unli Chat, P30 for 1 Day",
                    "ValidityDays": 1,
                    "Amount": 30.00
                }]
            }
        }
    }
</script>

<style scoped>

</style>