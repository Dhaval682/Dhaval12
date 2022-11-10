using Full_Practice_Ef.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Full_Practice_Ef.Repository
{
    public interface IRepository<TEntity> where TEntity:class
    {
        List<TEntity> GetAll();
        TEntity GetOne(int Id);
        List<TEntity> Insert(TEntity entity);
        List<TEntity> Update(int Id, TEntity entity);
        void Delete(int Id);
    }
    public class Repository<T> : IRepository<T> where T : class
    {
        private ManufactureContext DbContext { get; set; }
        public Repository(ManufactureContext manufactureContext)
        {
            DbContext = manufactureContext;
        }
        public List<T> GetAll()
        {
            return DbContext.Set<T>().ToList();
        }

        public T GetOne(int Id)
        {
            var data = DbContext.Set<T>().Find(Id);
            return data;
        }

        public List<T> Insert(T entity)
        {
            DbContext.Set<T>().Add(entity);
            DbContext.SaveChanges();
            return DbContext.Set<T>().ToList();
        }

        public List<T> Update(int Id, T entity)
        {
            var data = DbContext.Set<T>().Find(Id);
            DbContext.Entry<T>(data).CurrentValues.SetValues(entity);
            DbContext.SaveChanges();
            return DbContext.Set<T>().ToList();
        }
        public void Delete(int Id)
        {
            var data = DbContext.Set<T>().Find(Id);
            DbContext.Set<T>().Remove(data);
            DbContext.SaveChanges();
        }
    }
}
