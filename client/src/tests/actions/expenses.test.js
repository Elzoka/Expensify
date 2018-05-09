import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should setup edit expense action object", () => {
    const id = "123abc";
    const updates = {
        description: "Rent",
        amount: 1000,
        createdAt: 123
    };
    const action = editExpense(id, updates);

    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates
    });
});

test("should setup add expense action object with provided values", () => {
    const expense = {
        description: "Rent",
        note: "this was the last months rent",
        amount: 109500,
        createdAt: 1000
    };
    const action = addExpense(expense);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test("should setup add expense action object with provided values", () => {
    const expense = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});
