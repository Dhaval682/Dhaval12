using System;
using System.Linq;
using System.Threading.Tasks;
using ManufacturingEF.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace ManufacturingEF
{

    class Program
    {
        public static ManufactureContext Dbmanufacture { get; set; }
        static void Main(string[] args)
        {
            Dbmanufacture = new ManufactureContext();
            // DeleteCustomerData();
            // ShowAllProuduct();
            //SearchProuduct();
            //GetAllCustomer();
            customerOrderPlaced();
        }

        public static void GetAllCustomer()
        {
            var cutomer=Dbmanufacture.Customers.FromSqlRaw("GetAllCustomer").ToList();
            foreach (var item in cutomer)
            {
                Console.WriteLine($"Customer Id   :{item.CustomerId} CustomerName :{item.CustomerName}  ");
            }
        }
        public static void InsertCustomerData()
        {
            Console.WriteLine("Please Enter Customer Name");
            var Name = Console.ReadLine();
            Dbmanufacture.Customers.FromSqlRaw("EXECUTE InsertCustomerData {0}", Name).ToList();
        }
        public static void UpdateCustomerData()
        {
            Console.WriteLine("Please Enter Customer Id");
            var CustId =Convert.ToInt32( Console.ReadLine());
            Console.WriteLine("Please Enter Customer Name");
            var CustName =  Console.ReadLine();
            Dbmanufacture.Customers.FromSqlRaw("EXECUTE UpdateCustomerData {0},{1}", CustId, CustName).ToList();
        }
        public static void DeleteCustomerData()
        {
            Console.WriteLine("Please Enter Customer Id");
            var Id = Convert.ToInt32(Console.ReadLine());
            Dbmanufacture.Customers.FromSqlRaw("EXECUTE DeleteCustomerData {0}", Id).ToList();
        }

        public static void ShowAllProuduct()
        {
            var prouduct=Dbmanufacture.Toys.FromSqlRaw("AllProuduct").ToList();

            foreach (var item in prouduct)
            {
                Console.WriteLine($"Prouduct Name :{item.ToyName} Prouduct Type :{item.ToyType} Prouduct Price :{item.Price}");            
            }
        }
        public static void SearchProuduct()
        {
            var prouduct = Dbmanufacture.Toys.FromSqlRaw("AllProuduct").ToList();
            Console.WriteLine("Enter Prouduct Name");
            var pro = Console.ReadLine();
            foreach (var item in prouduct)
            {
                if (item.ToyName.StartsWith(pro))
                {
                    Console.WriteLine($"Prouduct Name :{item.ToyName} Prouduct Type :{item.ToyType} Prouduct Price :{item.Price}");
                }
               
            }
        }

        public static void customerOrderPlaced()
        {
            Console.WriteLine("Please Enter Toy Id");
            var toy_id = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Please Enter Customer Id");
            var Cust_id = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Please Enter Toy Quantity");
            var quantity = Convert.ToInt32(Console.ReadLine());

            var orderItem = Dbmanufacture.OrderItems.FromSqlRaw("CustomerOrders {0},{1},{2}", toy_id, Cust_id, quantity).ToList();
            int orderItemId=0;
            foreach (var dataitem in orderItem)
            {
                 orderItemId = dataitem.OrderItemId;
            }

            Dbmanufacture.Orders.FromSqlRaw("CustomerOrdersPlaced {0}", orderItemId).ToList();
        }
    }
}
