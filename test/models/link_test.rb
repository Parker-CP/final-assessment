require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  should belong_to(:user)
  should validate_presence_of(:title)
  should validate_presence_of(:url)

  test "mark_read" do
    link = links(:one)
    assert_equal false, link.read
    link.mark_read
    assert_equal true, link.read
  end

  test "mark_unread" do
    link = links(:two)
    assert_equal true, link.read
    link.mark_unread
    assert_equal false, link.read
  end
end
