const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class OpenBankAccountCase extends BlazeCase {
  constructor() {
    super(
      "OpenBankAccount",
      "Open Bank Account",
      [
  {
    "id": "1",
    "label": "Account Application",
    "steps": [
      {
        "id": "1",
        "label": "Fill Application Form",
        "status": "pending",
        "type": "manual"
      },
      {
        "id": "2",
        "label": "Submit Required Documents",
        "status": "pending",
        "type": "manual"
      }
    ]
  },
  {
    "id": "2",
    "label": "Application Review",
    "steps": [
      {
        "id": "1",
        "label": "Check Application Form",
        "status": "pending",
        "type": "automated"
      },
      {
        "id": "2",
        "label": "Verify Documents",
        "status": "pending",
        "type": "automated"
      }
    ]
  },
  {
    "id": "3",
    "label": "Account Creation",
    "steps": [
      {
        "id": "1",
        "label": "Create Bank Account",
        "status": "pending",
        "type": "automated"
      },
      {
        "id": "2",
        "label": "Notify User",
        "status": "pending",
        "type": "automated"
      }
    ]
  }
]
    );
  }
}

module.exports = new OpenBankAccountCase();