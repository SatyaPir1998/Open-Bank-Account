module.exports = {
  id: "BankAccount",
  label: "BankAccount",
  description: "",
  fields: [
  {
    "id": "1",
    "name": "accountNumber",
    "type": "number",
    "required": true,
    "description": "Unique account number"
  },
  {
    "id": "2",
    "name": "accountType",
    "type": "string",
    "required": true,
    "description": "Type of the account"
  },
  {
    "id": "3",
    "name": "balance",
    "type": "number",
    "required": true,
    "description": "Current balance in the account"
  },
  {
    "id": "4",
    "name": "userId",
    "type": "string",
    "required": true,
    "description": "ID of the user who owns this account"
  }
]
};