require 'test_helper'

class UserLoginTest < ActionDispatch::IntegrationTest
  test "registered user can login" do
    user = User.create(email: "David@gmail.com", password: "password")

    visit login_path

    fill_in "Email", with: "David@gmail.com"
    fill_in "Password", with: "password"
    click_button "Login"

    assert page.has_content?("David@gmail.com")
  end

  test "registed user input invalid information, render login" do
    user = User.create(email: "David@gmail.com", password: "password")

    visit login_path
    assert page.has_content?("Login")
    fill_in "Email", with: "David@gmail.com"
    fill_in "Password", with: ""
    click_button "Login"

    assert page.has_content?("Login")
    assert page.has_content?("Please make sure all fields are correct...")
  end
end
