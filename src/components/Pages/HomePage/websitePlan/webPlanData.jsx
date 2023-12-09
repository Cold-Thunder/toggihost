import { GiCheckMark } from "react-icons/gi"


const planData = [
    ["Disk Space", "1 GB", "5 GB", "10 GB","25 GB"],
    ["Websites", "Up to 5", "Up to 10", "Up to 25", "Up to 100"],
    ["Databases", "Unlimited", "Unlimited", "Unlimited","Unlimited"],
    ["Automatic Backup Frequency", "5 Days", "Daily", "Daily", "Daily"],
    ["On Demand Backups", "-", <GiCheckMark />, <GiCheckMark />, <GiCheckMark />],
    ["Priority Queueing", "-", <GiCheckMark />, <GiCheckMark />, <GiCheckMark />],
    ["Zip file downloads", "5/month", "Unlimited", "Unlimited", "Unlimited"],
    ["Full website restore", "3/month", "Unlimited", "Unlimited", "Unlimited"],
    ["Individual file restore", "5/month", "Unlimited","Unlimited","Unlimited"],
]

export default planData;