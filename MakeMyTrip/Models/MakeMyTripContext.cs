using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class MakeMyTripContext : DbContext
    {
        public MakeMyTripContext()
        {
        }

        public MakeMyTripContext(DbContextOptions<MakeMyTripContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Booking> Bookings { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Hotel> Hotels { get; set; }
        public virtual DbSet<OccupiedRoom> OccupiedRooms { get; set; }
        public virtual DbSet<Reservation> Reservations { get; set; }
        public virtual DbSet<ReservedRoom> ReservedRooms { get; set; }
        public virtual DbSet<Room> Rooms { get; set; }
        public virtual DbSet<RoomType> RoomTypes { get; set; }
        public virtual DbSet<State> States { get; set; }
        public virtual DbSet<UserTable> UserTables { get; set; }
        public virtual DbSet<HotelDetails> HotelDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0763\\MSSQL2019;Database=MakeMyTrip;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Booking>(entity =>
            {
                entity.ToTable("booking");

                entity.Property(e => e.BookingId).HasColumnName("booking_id");

                entity.Property(e => e.HotelId).HasColumnName("hotel_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Hotel)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.HotelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__booking__hotel_i__534D60F1");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__booking__user_id__5441852A");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("city");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.CityName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("city_name");
            });

            modelBuilder.Entity<Hotel>(entity =>
            {
                entity.ToTable("hotel");

                entity.Property(e => e.HotelId).HasColumnName("hotel_id");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.HotelName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("hotel_name");

                entity.Property(e => e.PriceRange)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('0-1500')");

                entity.Property(e => e.StateId).HasColumnName("state_id");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Hotels)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__hotel__city_id__4F7CD00D");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.Hotels)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__hotel__state_id__5070F446");
            });

            modelBuilder.Entity<OccupiedRoom>(entity =>
            {
                entity.ToTable("occupiedRoom");

                entity.Property(e => e.OccupiedRoomId).HasColumnName("occupiedRoom_id");

                entity.Property(e => e.CheckIn)
                    .HasColumnType("datetime")
                    .HasColumnName("check_in");

                entity.Property(e => e.CheckOut)
                    .HasColumnType("datetime")
                    .HasColumnName("check_out");

                entity.Property(e => e.ReservationId).HasColumnName("reservation_id");

                entity.Property(e => e.RoomId).HasColumnName("room_id");

                entity.HasOne(d => d.Reservation)
                    .WithMany(p => p.OccupiedRooms)
                    .HasForeignKey(d => d.ReservationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__occupiedR__reser__6383C8BA");

                entity.HasOne(d => d.Room)
                    .WithMany(p => p.OccupiedRooms)
                    .HasForeignKey(d => d.RoomId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__occupiedR__room___628FA481");
            });

            modelBuilder.Entity<Reservation>(entity =>
            {
                entity.ToTable("reservation");

                entity.Property(e => e.ReservationId).HasColumnName("reservation_id");

                entity.Property(e => e.BookingId).HasColumnName("booking_id");

                entity.Property(e => e.DateIn)
                    .HasColumnType("datetime")
                    .HasColumnName("date_in");

                entity.Property(e => e.DateOut)
                    .HasColumnType("datetime")
                    .HasColumnName("date_out");

                entity.HasOne(d => d.Booking)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.BookingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__reservati__booki__571DF1D5");
            });

            modelBuilder.Entity<ReservedRoom>(entity =>
            {
                entity.ToTable("reservedRoom");

                entity.Property(e => e.ReservedRoomId).HasColumnName("reservedRoom_id");

                entity.Property(e => e.NumberofRoom).HasColumnName("numberofRoom");

                entity.Property(e => e.ReservationId).HasColumnName("reservation_id");

                entity.Property(e => e.RoomTypeId).HasColumnName("roomType_id");

                entity.Property(e => e.Status)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("status");

                entity.HasOne(d => d.Reservation)
                    .WithMany(p => p.ReservedRooms)
                    .HasForeignKey(d => d.ReservationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__reservedR__reser__5BE2A6F2");

                entity.HasOne(d => d.RoomType)
                    .WithMany(p => p.ReservedRooms)
                    .HasForeignKey(d => d.RoomTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__reservedR__roomT__5CD6CB2B");
            });

            modelBuilder.Entity<Room>(entity =>
            {
                entity.ToTable("room");

                entity.Property(e => e.RoomId).HasColumnName("room_id");

                entity.Property(e => e.Number).HasColumnName("number");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.RoomName)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("room_name");

                entity.Property(e => e.RoomTypeId).HasColumnName("roomType_id");

                entity.HasOne(d => d.RoomType)
                    .WithMany(p => p.Rooms)
                    .HasForeignKey(d => d.RoomTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__room__roomType_i__5FB337D6");
            });

            modelBuilder.Entity<RoomType>(entity =>
            {
                entity.ToTable("roomType");

                entity.Property(e => e.RoomTypeId).HasColumnName("roomType_id");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.NumberOfBed).HasColumnName("numberOfBed");
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.ToTable("state");

                entity.Property(e => e.StateId).HasColumnName("state_id");

                entity.Property(e => e.StateName)
                    .IsRequired()
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("state_name");
            });

            modelBuilder.Entity<UserTable>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__user_tab__B9BE370FCD4122A6");

                entity.ToTable("user_table");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("phone");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
