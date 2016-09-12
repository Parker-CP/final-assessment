require 'test_helper'

class LinksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    ApplicationController.stub_any_instance(:current_user, users(:one)) do
      get root_path
      assert_response :success
    end
  end
end
