using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace LearnAPI.Repos.Models;

[Table("tbl_userpermission")]
public partial class TblUserPermission
{
    [Key]
    [Column("Id")]
    [StringLength(36)]
    public string Id { get; set; }

    [Column("username")]
    [StringLength(250)]
    public string username { get; set; }


    [Column("code")]
    [StringLength(50)]
    public string code { get; set; }

    [Column("Perrmission")]
    [StringLength(50)]
    public string perrmission { get; set; } = null!;

    [Column("Type")]
    [StringLength(50)]
    public string Type { get; set; } = null!;

    [Column("CreatedTime", TypeName = "datetime")]
    public DateTime CreatedTime { get; set; }
    [Column("UpdatedTime", TypeName = "datetime")]
    public DateTime? UpdatedTime { get; set; }

    [Column("Status")]
    public int Status { get; set; }

    [Column("url")]
    public string url { get; set; }
    [Column("icon")]
    public string icon { get; set; } = null!;
}
