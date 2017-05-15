class Dog

  attr_reader :name, :age

  def initialize(args={})
    @name = args.fetch(:name, "Doggo")
    @age = args.fetch(:age, 0)
  end


  def greeting
    "Hi, my name is #{name}. I am #{age} years old."
  end

end

dog = Dog.new

puts dog.greeting
