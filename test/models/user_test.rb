require 'test_helper'

class UserTest < ActiveSupport::TestCase

   should have_many(:links)
   should validate_presence_of(:email)
   should validate_uniqueness_of(:email)
   should validate_presence_of(:password)

end
