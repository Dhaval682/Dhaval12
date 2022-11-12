using MakeMyTrip.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Repository
{
    public interface IRepository<TEntity> where TEntity : class
    {
        List<TEntity> GetAll();
        TEntity GetOne(int Id);
        List<TEntity> Insert(TEntity entity);
        List<TEntity> Update(int Id, TEntity entity);
        List<TEntity> Delete(int Id);
    }
    public class Repository<T> : IRepository<T> where T : class
    {
        private MakeMyTripContext DbContext { get; set; }
        public Repository(MakeMyTripContext makeMyTripContext)
        {
            DbContext = makeMyTripContext;
        }
        public List<T> GetAll()
        {
            return (DbContext.Set<T>().ToList());
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

        public List<T> Delete(int Id)
        {
            var data = DbContext.Set<T>().Find(Id);
            DbContext.Set<T>().Remove(data);
            DbContext.SaveChanges();
            return DbContext.Set<T>().ToList();
        }
    }
}
