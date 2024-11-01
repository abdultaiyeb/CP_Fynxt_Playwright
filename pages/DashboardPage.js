class DashboardPage {
    constructor(page) {
        this.page = page;
        this.dashboardHeading = "//body/form[@novalidate='novalidate']/div/h5[1]";
    }

    async verifyDashboardHeading() {     
        const headingText = await this.page.locator(this.dashboardHeading).textContent();      
        return headingText;
    }
}

module.exports = DashboardPage; 
