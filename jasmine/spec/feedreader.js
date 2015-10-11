/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test makes sure that each object in allFeeds has
         * a URL defined and that the URL is not empty.
         */
        it('should have a defined URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* This test makes sure that each object in allFeeds has
         * a name defined and that the name is not empty.
         */
        it('should have a defined name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* This suite contains a set of related tests about the menu
     * functionalities.
     */
    describe('The menu', function() {
        /* This test makes sure the menu is hidden by default by checking
         * whether the body element has 'menu-hidden' class when DOM is
         * loaded.
         */
        it('should have the menu element hidden by default', function() {
            var bodyWithHiddenMenu = document.getElementsByClassName('menu-hidden');

            expect(bodyWithHiddenMenu.length).not.toBe(0);
        });


        /* This suite contains a set of related tests about the menu
         * icon when clicked.
         */
        describe('when clicked', function() {
            var menuIcon,
                bodyElem;

            beforeEach(function() {
                menuIcon = document.getElementsByClassName('menu-icon-link')[0];
                bodyElem = document.getElementsByTagName('body')[0];
            });


            /* This test makes sure that when the menu is hidden and the
             * menu icon is clicked, the menu will be shown.
             */
            it('should display the menu', function() {
                menuIcon.click();

                expect(bodyElem.classList.contains('menu-hidden')).toBe(false);
            });

            /* This test makes sure that when the menu is shown and the
             * menu icon is clicked, the menu will be hidden.
             */
            it('should hide the menu', function() {
                bodyElem.classList.remove('menu-hidden');
                menuIcon.click();

                expect(bodyElem.classList.contains('menu-hidden')).toBe(true);
            });
        });
    });


    /* This suite contains a set of related tests about the
     * initial entries.
     */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });


        /* This test makes sure that when loadFeed function is called in
         * initial page load with the function init, there is at least
         * a single .entry element within the .feed container.
         */
        it('has added entries', function(done) {
            expect($('.feed').children().length).not.toBe(0);

            done();
        });
    });


    /* This suite contains a set of related test about the new feed
     * selection.
     */
    describe('New Feed Selection', function() {
        var previousEntries;

        beforeEach(function(done) {
            previousEntries = $('.feed').html();

            loadFeed(1, done);
        });


        /* This test makes sure when a new feed is loaded by the
         * loadFeed function that the content actually changes.
         */
        it('should be different from the previous one', function(done) {
            var newEntries = $('.feed').html();

            expect(previousEntries === newEntries).toBe(false);

            loadFeed(0);    // Set the feed to be the initial one

            done();
        });
    });


    /* This suite contains a set of tests about error handlers.
     */
    describe('Error Handlers', function() {
        var feedBeforeError;

        beforeEach(function(done) {
            setTimeout(function() { // Timeout is set to avoid confliction with other asynchronous spec test
                feedBeforeError = $('.feed').html();

                // Create error on new feed selection
                allFeeds[0].url = 'http://blog.udacity.com/feeds/posts/default?alt=asdf'
                loadFeed(0, done);
            }, 1000);
        });

        it('should be called when new feed selection fails', function(done) {
            var feedAfterError = $('.feed').html();

            expect(feedBeforeError === feedAfterError).toBe(false);

            // Set the feed to be the initial one
            allFeeds[0].url = 'http://blog.udacity.com/feeds/posts/default?alt=rss';
            loadFeed(0);

            done()
        });
    });
}());
