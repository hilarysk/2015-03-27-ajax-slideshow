# Class: Slide
#
# Creates different slides for the slideshow.
#
# Attributes:
# @title       - String: Text of title
# @slide_order - Integer: Slide slide_order number
# @slide_text  - String: Slide body slide_text
# @id          - Integer: Primary key
#
#
# Public Methods:
# #to_hash
# 
# Private Methods:

class Slide < ActiveRecord::Base
  
  attr_accessible :title, :slide_text, :slide_order
  
  validates :slide_text, :slide_order, presence: true
  validates :slide_text, :slide_order, uniqueness: { case_sensitive: false }

  
  # Public: to_hash
  # 
  # Returns a hash of the object
  #
  # Parameters:
  # None
  #
  # Returns:
  # A hash
  #
  # State Changes:
  # None  
  
  def to_hash
    {
      id: id,
      title: title,
      slide_text: slide_text,
      slide_order: slide_order      
    }
  end
  

end