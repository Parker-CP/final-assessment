require 'test_helper'

class Api::V1::UnreadControllerTest < ActionDispatch::IntegrationTest
  test "mark as unread" do
    assert_equal true, links(:two).read
    patch "/api/v1/links/#{links(:one).id}/unread"

    assert_response :success
    link = JSON.parse(response.body)

    assert_equal false, link["read"]
  end
end
