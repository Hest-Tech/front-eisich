class ValidateMpesaData {
    isValidPhoneNumber(num) {
        return (Number(num) && num.length !== 9) ? num : { status:422, msg:'invalid phone number' };
    }

    isValidShortCodeNumber(num) {
        return Number(num) ? num : { status:422, msg:'invalid mpesa code' };
    }

    isValidAmount(num) {
        return Number(num) ? num : { status:422, msg:'invalid amount' };
    }

    isValidVendorNumber(num) {
        return Number(num) ? num : { status:422, msg:'invalid vendor number' };
    }

    validateMpesaReq({ phoneNumber, shortCode, amount, vendor }, res) {
        const validData = {
            phoneNumber: this.isValidPhoneNumber(phoneNumber),
            shortCode: this.isValidShortCodeNumber(shortCode),
            amount: this.isValidAmount(amount),
            vendor: this.isValidVendorNumber(vendor)
        }

        let values = Object.values(validData);
        
        values.forEach(val => {
            if (typeof val === 'object') {
                return res.json(val);
            }
            return null;
        });
    }
}

module.exports = { ValidateMpesaData };
//phoneNumber
//shortCode
//amount
//vendor