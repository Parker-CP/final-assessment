class User < ApplicationRecord
  has_secure_password
  has_many :links

  validates :email, presence: true, uniqueness: true
  validates_confirmation_of :password
  validates :password, presence: true
end
