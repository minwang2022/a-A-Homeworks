class Stack
    
    attr_reader :stack_ivar
    def initialize
        # create ivar to store stack here!
        @stack_ivar = []
    end

    def push(el)
        @stack_ivar << el
        # adds an element to the stack
    end

    def pop
        @stack_ivar.pop
        # removes one element from the stack
    end

    def peek
        @stack_ivar[-1]
        # returns, but doesn't remove, the top element in the stack
    end
end

class Queue
    attr_reader :queue_ivar
    def initialize
      # create ivar to store stack here!
      @queue_ivar = []
    end

    def enqueue(el)
        @queue_ivar << el
      # adds an element to the stack
    end

    def dequeue
        @queue_ivar.shift
      # removes one element from the stack
    end

    def peek
        @queue_ivar.first
      # returns, but doesn't remove, the top element in the stack
    end
end

class Map
    attr_reader :map_ivar
    def initialize
        @map_ivar = []
        
    end

    def set(key, value)
        
        index = @map_ivar.index { |sub_arr| sub_arr[0] == key}
        if index 
            @map_ivar[index][1] = value
        else 
            @map_ivar << [key, value]
        end 
    end

    def get(key)
        @map_ivar.select { |sub_arr| return sub_arr[1] if sub_arr[0] == key}
        nil
    end

    def delete(key)
        @map_ivar.reject! { |sub_arr| sub_arr[0] == key}
    end

    def show 
        new_arr = []
        @map_ivar.each { |sub_arr| new_arr << sub_arr}
        new_arr
    end

end


#   stack = Stack.new
#   stack.push(4)
# #   p stack
#   stack.push(5)
# #   p stack 
# stack.push(6)
# # p stack
# arr = [6, 7, 8, 9, 10]
# arr.each { |num| stack.push(num)}
# # p stack
# stack.pop
# p stack
# p stack.peek

# queue = Queue.new
# queue.enqueue(3)
# # p queue 
# arr = [6, 7, 8, 9, 10]
# arr.each { |num| queue.enqueue(num)}
# p queue 
# queue.dequeue
# p queue 
# p queue.peek

map = Map.new
map.set("ko", 3)
p map
map.set("ku", 4)
p map 
map.set("ko", 4)
p map 

p map.get("ko")
p map.get("kk")

p map.show