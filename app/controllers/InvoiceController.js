export const CreateInvoice = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "Create Invoice successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const ReadInvoiceDetails = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "Read Invoice Details successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const ReadInvoiceList = async (req, res) => {
    try {

        return res.json({ status: "success", messege: "Read Invoice List successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}