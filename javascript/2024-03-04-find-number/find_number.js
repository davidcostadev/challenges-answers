const { assert, test } = require("../lib/testUtils");

function findPhoneNumber(phoneBook, personName) {
  const personNameSearch = personName.toLowerCase();
  for (let i = 0; i < phoneBook.length; i++) {
    const currentName = phoneBook[i].name.toLowerCase();

    if (currentName === personNameSearch) {
      return phoneBook[i].phoneNumber;
    }
  }

  return null;
}

// Test cases
test("Phone Book Test - Existing Person", function () {
  const phoneBook = [
    { phoneNumber: "123456789", name: "Alice" },
    { phoneNumber: "987654321", name: "Bob" },
    { phoneNumber: "456789123", name: "Charlie" },
  ];

  assert(findPhoneNumber(phoneBook, "Alice"), "123456789", "Test 1");
  assert(findPhoneNumber(phoneBook, "Bob"), "987654321", "Test 2");
  assert(findPhoneNumber(phoneBook, "Charlie"), "456789123", "Test 3");
});

test("Phone Book Test - Non-Existing Person", function () {
  const phoneBook = [
    { phoneNumber: "123456789", name: "Alice" },
    { phoneNumber: "987654321", name: "Bob" },
    { phoneNumber: "456789123", name: "Charlie" },
  ];

  assert(findPhoneNumber(phoneBook, "David"), null, "Test 4");
  assert(findPhoneNumber(phoneBook, "Eve"), null, "Test 5");
});
