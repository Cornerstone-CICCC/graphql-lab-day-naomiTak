import { Customer } from "../models/customer.model";
import { ICustomer } from "../types/cunstomer";

const getCustomers = async () => {
  const costomers = await Customer.find()
  //console.log(costomers)
  return costomers
}

const getCustomerById = async (id: string) => {
    //console.log(id)
    const result = await Customer.findById(id)
    //console.log(result) 
    return result
  //return await Customer.findById(id)
}

const createCustomer = async (data: Omit<ICustomer, 'id'>) => {
  const customer = new Customer(data)
  return await customer.save()
}

const updateCustomer = async (id: string, data: Partial<ICustomer>) => {
  return await Customer.findByIdAndUpdate(id, data, { new: true })
}

const deleteCustomer = async (id: string) => {
  return await Customer.findByIdAndDelete(id)
}

export default {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
}