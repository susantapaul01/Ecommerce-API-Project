export const CreateInvoice = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "CreateInvoice successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const ReadInvoiceDetails = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ReadInvoiceDetails successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const ReadInvoiceList = async (req, res) => {
    try {

        return res.json({ status: "success", messege: "ReadInvoiceList successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}