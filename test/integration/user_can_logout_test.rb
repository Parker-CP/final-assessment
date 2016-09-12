require 'test_helper'

class UserLogoutTest < ActionDispatch::IntegrationTest
  test "logged in user can logout" do
    user = User.create(email: "David@gmail.com",
                       password: "password")

    visit login_path
    fill_in "Email", with: user.email
    fill_in "Password", with: user.password
    click_button "Login"
    assert page.has_content?("Welcome David")

    click_link "Logout"

    refute page.has_content?("Welcome David")
    assert page.has_content?("Login")
    assert page.has_content?("Create Account")
  end
end
