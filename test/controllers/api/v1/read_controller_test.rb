require 'test_helper'

class Api::V1::ReadControllerTest < ActionDispatch::IntegrationTest
  test "mark as read" do
    assert_equal false, links(:one).read
    patch "/api/v1/links/#{links(:one).id}/read"

    assert_response :success
    link = JSON.parse(response.body)

    assert_equal true, link["read"]
  end
end
