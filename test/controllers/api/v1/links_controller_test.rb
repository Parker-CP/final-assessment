require 'test_helper'

class Api::V1::LinksControllerTest < ActionDispatch::IntegrationTest
  test "fetch links" do
    ApplicationController.stub_any_instance(:current_user, users(:one)) do
      get "/api/v1/links"

      assert_response :success

      links = JSON.parse(response.body)

      assert_equal 2, links.count
      assert_equal "First Link", links.first["title"]
      assert_equal "First Link Url", links.first["url"]
      assert_equal false, links.first["read"]
    end
  end

  test "create link" do
    ApplicationController.stub_any_instance(:current_user, users(:one)) do

      post "/api/v1/links?title=new&url=http://google.com"

      assert_response :success

      link = JSON.parse(response.body)

      assert_equal 3, Link.all.count
      assert_equal "new", link["title"]
      assert_equal "http://google.com", link["url"]
    end
  end

  test "create link with bad data" do
    skip
    ApplicationController.stub_any_instance(:current_user, users(:one)) do
      post "/api/v1/links"

      assert_response :success

      error = JSON.parse(response.body)

      assert_equal "invalid Data", error["error"]
    end
  end

  test "update link" do
    patch "/api/v1/links/#{links(:one).id}?title=new&url=http://battlenet.com"

    assert_response :success
    link = JSON.parse(response.body)

    assert_equal "new", link["title"]
    assert_equal "http://battlenet.com", link["url"]
  end

end
