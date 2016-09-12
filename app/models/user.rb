class User < ApplicationRecord
  has_secure_password
  has_many :links

  validates :email, uniqueness: true
  validates :password, confirmation: true
  validates :password_confirmation, presence: true
end
