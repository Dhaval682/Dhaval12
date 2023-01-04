using MakeMyTrip.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Repository
{
   public interface IRepository<TEntity> where TEntity:class
    {
        List<TEntity> GetAll();
        TEntity GetOne(int id);
        List<TEntity> Insert(TEntity entity);
        List<TEntity> Update(int id, TEntity entity);
        List<TEntity> Delete(int id);
    }

    public class Repository<T> : IRepository<T> where T : class
    {
        private MakeMyTripContext DbContext { get; set; }

        public Repository( MakeMyTripContext makeMyTrip)
        {
            DbContext = makeMyTrip;
        }
        public List<T> GetAll()
        {
            return (DbContext.Set<T>().ToList());
        }

        public T GetOne(int id)
        {
            var data = DbContext.Set<T>().Find(id);
            return data;
        }

        public List<T> Insert(T entity)
        {
            DbContext.Set<T>().Add(entity);
            DbContext.SaveChanges();
            return DbContext.Set<T>().ToList();
        }

        public List<T> Update(int id, T entity)
        {
            var data = DbContext.Set<T>().Find(id);
            DbContext.Entry<T>(data).CurrentValues.SetValues(entity);
            DbContext.SaveChanges();
            return DbContext.Set<T>().ToList();
        }

        public List<T> Delete(int id)
        {
            var data = DbContext.Set<T>().Find(id);
            DbContext.Set<T>().Remove(data);
            DbContext.SaveChanges();
            return DbContext.Set<T>().ToList();
        }
    }
}
