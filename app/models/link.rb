class Link < ApplicationRecord
  belongs_to :user

  validates :url, url: true
  validates :title, presence: true
  validates :url, presence: true

  def mark_read
    self.read = true
    self.save
    self
  end

end
