class SlidesController < ApplicationController
  layout "application"
  
  def slide_num
    slides = (Slide.all).length  
    slides.to_json
    render text: "#{slides.to_json}"  
  end

  def postslides    
    slides = Slide.all
    slides_array = slides.map do |object|
       object.to_hash_all_info 
     end
    slides_array.to_json
    render text: "#{slides_array.to_json}"
  end
  
  def postorder
    slide = Slide.find(params[:slide_order])
    slide_hash = slide.to_hash
    slide_hash.to_json    
    render text: "#{slide_hash.to_json}"

  end
  
  
end
