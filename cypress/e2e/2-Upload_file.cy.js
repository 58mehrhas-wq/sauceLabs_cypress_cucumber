/// <reference types="cypress" />

import { Runnable } from "mocha";

describe("Upload Tests", () => {
    it("upload file and assert file name", () => {

        // cy.on("fail", (err, Runnable) => {
        //     console.log(err.message);
        //     return false;
        // });

        cy.visit("https://the-internet.herokuapp.com/upload")

        // Upload file to the input field
        cy.get('#file-upload').selectFile("cypress/fixtures/Campaign-Summary-Web.png")

        // cy.get('#file-upload').selectFile({

        //     contents: Cypress.Buffer.from('file contents'),
        //     filename: "Campaign-Summary-Web.png",
        //     lastModified: Date.now()
        // });

        
        
        
        cy.get('#file-submit').click()

        cy.get("h3").should("be.visible")

    });
});