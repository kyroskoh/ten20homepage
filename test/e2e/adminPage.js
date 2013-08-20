'user strict'

describe("admin page tests", function() {
  beforeEach(function() {
    browser().navigateTo('/admin');
  });

  it('should redirect to login page correnctly', function() {
    expect(element('title').text()).toEqual('Login | ten20live');
    expect(element('.login-form ').count()).toBe(1);
  });
});