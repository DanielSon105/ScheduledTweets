module ApplicationHelper
    def avatar_url(user)
        gravatar_id = Digest::MD5::hexdigest(user.email).downcase
        gravatar_id = Digest::MD5::hexdigest("daniel.g.barrido@gmail.com").downcase
        #the second gravatar_id is my email address
        "https://www.gravatar.com/avatar/#{gravatar_id}.jpg?d=identical&s=150"
    end
end
