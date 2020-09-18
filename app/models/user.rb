class User < ApplicationRecord
    attr_reader :password

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :follows
<<<<<<< HEAD
    has_many :friends

    has_many :shows, through: :follows, source: :show
    has_many :companions, through: :friends, source: :friend
=======

    has_many :shows, through: :follows, source: :show
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil 
    end 

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
