class User < ApplicationRecord
  has_secure_password

  validates :email, uniqueness: true
  validates :password, confirmation: true
  validates :password_confirmation, presence: true
end
