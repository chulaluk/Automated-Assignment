import { locator } from '../fixtures/locators'
import { testData } from '../fixtures/test_data'

describe('Project Flow Test', () => {
    before(() => {
        cy.server()
        cy.route('**/api/env').as('getPage');
        cy.visit('https://enterprise.taskworld.com/')
        cy.wait('@getPage')
        cy.get(locator.login.emailInput).type(testData.Username)
        cy.get(locator.login.passwordInput).type(testData.Password)
        cy.get(locator.login.submitButton).click()
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('session_id', 'project_id')
    })

    it('should be able to create new project', () => {
        cy.wait(5000)
        cy.server()
        cy.route('/v1/starter/*').as('getStarter')
        cy.wait('@getStarter')
        cy.get(locator.project.newProject).click()
        cy.get(locator.project.projectNameInput).type('Sample project')
        cy.get(locator.project.descriptionInput).type('This project created for testing')
        cy.get(locator.project.chooseATemplateButton).click()
        cy.get(locator.project.createProjectButton).click()
        cy.get(locator.project.createdProject).should('contain.text', 'Sample project')
    })

    it('should be able to create a tasklist', () => {
        cy.wait(3000)
        cy.get(locator.project.tasklistInput).focus().type('a sample tasklist{enter}{enter}')
        cy.get(locator.project.createdTasklist).should('contain.text', 'a sample tasklist')
    })

    it('should be able to create a task', () => {
        cy.get(locator.project.addTaskIcon).click({ force: true })
        cy.get(locator.project.createNewTaskInput).type('a sample task')
        cy.get(locator.project.createNewTaskButton).click({ force: true })
        cy.get(locator.project.createdTask).should('contain.text', 'a sample task')
    })

    it('should be able to complete the task', () => {
        const todaysDate = Cypress.moment().format('MMM DD')
        cy.get(locator.project.closeNewTaskButton).click({ force: true })
        cy.get(locator.project.checkBoxTask).click({ force: true })
        cy.get(locator.project.completedText).should('contain.text', `Completed on ${todaysDate}`)
    })

    it('should be able to open the completed task to see detail of the task', () => {
        cy.get(locator.project.seeDetailTask).click({ force: true })
        cy.get(locator.project.detailTaskTitle).should('contain.text', 'a sample task')
        cy.get(locator.project.propertiesTab).should('be.visible')
        cy.get(locator.project.commentsTab).should('be.visible')
        cy.get(locator.project.resourcesTab).should('be.visible')
    })

})
