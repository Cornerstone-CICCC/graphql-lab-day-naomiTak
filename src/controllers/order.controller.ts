import { Order } from "../models/order.model";
import { IOrder } from "../types/order";

const getOrders = async () => {
  const orders = await Order.find()
  return orders
}

const createOrder = async (data: Omit<IOrder, 'id'>) => {
  //console.log(data)
  const order = new Order(data)
  return await order.save()
}

const updateOrder = async (id: string, data: Partial<IOrder>) => {
  return await Order.findByIdAndUpdate(id, data, { new: true })
}

const deleteOrder = async (id: string) => {
  return await Order.findByIdAndDelete(id)
}

export default {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder
}