import axios from "axios"

export default {

    getCustomers: function() {
        return axios.get("/api/customers");
    },

    getCustomer: function(id) {
        return axios.get("/api/customers/" + id);
    },

    deleteCustomer: function(id) {
        return axios.delete("/api/customers/" + id);
    },

    saveCustomer: function(customerData) {
        return axios.post("/api/customers", customerData);
    }
}