require 'test_helper'

class GuestSignUpTest < ActionDispatch::IntegrationTest
  test "a user can be created" do
    ApplicationController.stub_any_instance(:current_user, users(:two)) do
      visit new_user_path
      fill_in "Email", with: "David@gmail.com"
      fill_in "Password", with: "Password"
      fill_in "Password confirmation", with: "Password"
      click_button "Create User"

      assert page.has_content?("David@gmail.com")
    end
  end

  test "guest entered invalid information, new page rendered" do
    ApplicationController.stub_any_instance(:current_user, users(:one)) do
      visit new_user_path
      assert page.has_content?("Create Account")
      fill_in "Email", with: ""
      fill_in "Password", with: "Password"
      click_button "Create User"

      assert page.has_content?("Create Account")
      assert page.has_content?("Email can't be blank")
    end
  end
end
