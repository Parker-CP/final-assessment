require 'test_helper'

class LinksControllerTest < ActionDispatch::IntegrationTest
  test "should get sign up" do
    ApplicationController.stub_any_instance(:current_user, users(:one)) do
      get new_user_path
      assert_response :success
    end
  end

  test "should get dashboard" do
    ApplicationController.stub_any_instance(:current_user, users(:one)) do
      get user_path(users(:one))
      assert_response :success
    end
  end
end
