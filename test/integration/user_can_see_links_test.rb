require 'test_helper'

class UserCanSeeLinksTest < ActionDispatch::IntegrationTest
  setup do
    Capybara.current_driver = Capybara.javascript_driver
  end

  test "logged in user can see links" do
    visit login_path

    fill_in "Email", with: "David@gmail.com"
    fill_in "Password", with: "password"
    click_button "Login"

    assert page.has_content?("David@gmail.com")

    fill_in "Title", with: "Link A"
    fill_in "Url", with: "http://linka.com"
    click_button "Save"

    assert page.has_content?("Link A")
    assert page.has_content?("http://linka.com")
    assert page.has_content?("Read: false")

    click_on "Mark As Read"

    assert page.has_content?("Read: true")

    click_on "Mark Unread"

    select "Read", from: "status"

    refute page.has_content?("Link A")
    refute page.has_content?("http://linka.com")
    refute page.has_content?("Read: false")

    select "Unread", from: "status"

    assert page.has_content?("Link A")
    assert page.has_content?("http://linka.com")
    assert page.has_content?("Read: false")

    fill_in "Search", with: "ink"

    assert page.has_content?("Link A")
    assert page.has_content?("http://linka.com")
    assert page.has_content?("Read: false")

    fill_in "Search", with: "Bad Link!"

    refute page.has_content?("Link A")
    refute page.has_content?("http://linka.com")
    refute page.has_content?("Read: false")
  end

end
