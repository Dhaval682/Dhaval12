using CodeFirstEntityFramwork.Context;
using CodeFirstEntityFramwork.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeFirstEntityFramwork
{
    public static class IntialData
    {
            public static void Seed(this EmployeeContext dbContext)
            {
                if (!dbContext.Employees.Any())
                {
                    dbContext.Employees.Add(new Employee
                    {
                        EmployeeName = "Employee001",
                        Gender = "Male",
                        DateOfBirth = "01-01-1990",
                        Nationality = "Indian",
                        City = "Bangalore",
                        CurrentAddress = "Current Address",
                        PermanentAddress = "Permanent Address",
                        PINCode = "560078"
                    });
                    dbContext.Employees.Add(new Employee
                    {
                        EmployeeName = "Employee002",
                        Gender = "Female",
                        DateOfBirth = "01-01-1994",
                        Nationality = "Indian",
                        City = "Bangalore",
                        CurrentAddress = "Current Address",
                        PermanentAddress = "Permanent Address",
                        PINCode = "560078"
                    });
                    dbContext.Employees.Add(new Employee
                    {
                        EmployeeName = "Employee003",
                        Gender = "Female",
                        DateOfBirth = "01-01-1995",
                        Nationality = "Indian",
                        City = "Bangalore",
                        CurrentAddress = "Current Address",
                        PermanentAddress = "Permanent Address",
                        PINCode = "560078"
                    });

                    dbContext.SaveChanges();
                }
            }
        
    }
}

