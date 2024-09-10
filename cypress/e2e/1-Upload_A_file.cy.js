/// <reference types="cypress" />

import { Runnable } from "mocha";

describe("Upload Tests", () => {
    it("upload file and assert file name", () => {

        // cy.on("fail", (err, Runnable) => {
        //     console.log(err.message);
        //     return false;
        // });

        cy.visit("https://qa-automation-practice.netlify.app/file-upload.html")

        // Upload file to the input field
        cy.get('#file_upload').attachFile("Campaign-Summary-Web.png")



        // Click on Upload button
        cy.get("button[type='submit']").click()
        
        //Assert the file name
        cy.get("#file_upload_response").should("contain", "You have successfully uploaded")

    });
});