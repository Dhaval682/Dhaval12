using Repository_Pattern.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository_Pattern.Repository
{
   
    public interface IRepository <TEntity> where TEntity : class
    {
        List<TEntity> getAll();
        TEntity Add(TEntity entity);
        TEntity Update(int id,TEntity entity);
        void  Delete(int id);
        TEntity getOne(int id);

    }
    public class Repository<T> : IRepository<T> where T : class
    {
        public ManufactureContext dbContext { get; set; }

        public Repository(ManufactureContext manufactureContext)
        {
            dbContext = manufactureContext;
        }
        public List<T> getAll()
        {
            return dbContext.Set<T>().ToList();
        }

        public T Add(T entity)
        {
            dbContext.Add(entity);
            dbContext.SaveChanges();
            return entity;
        }

        public T Update(int id,T entity)
        {
            var data=dbContext.Set<T>().Find(id);
            dbContext.Entry<T>(data).CurrentValues.SetValues(entity);
            dbContext.Update(data);
            dbContext.SaveChanges();
            return entity;
        }
        public void Delete(int id)
        {
            var data = dbContext.Set<T>().Find(id);
            dbContext.Remove(data);
            dbContext.SaveChanges();
            
        }
        public T getOne(int id)
        {
            var data = dbContext.Set<T>().Find(id);
            
            return data;
        }
    }
}
