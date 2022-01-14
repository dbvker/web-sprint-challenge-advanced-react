import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    // Grab inputs on field and enter data in them
    const firstName = screen.getByLabelText(/first name:/i);
    userEvent.type(firstName, "Dylan");

    const lastName = screen.getByLabelText(/last name:/i);
    userEvent.type(lastName, "Baker");

    const address = screen.getByLabelText(/address:/i);
    userEvent.type(address, "123 Main St.");

    const city = screen.getByLabelText(/city:/i);
    userEvent.type(city, "Wichita");

    const state = screen.getByLabelText(/state:/i);
    userEvent.type(state, "Kansas");

    const zipCode = screen.getByLabelText(/zip:/i);
    userEvent.type(zipCode, "67226");

    const button = screen.getByRole("button");
    userEvent.click(button);

    //check for success message and its contents
    waitFor(async () => {
        const successMessage = await screen.findByTestId('successMessage');

        expect(successMessage).toBeInTheDocument();
    })
});