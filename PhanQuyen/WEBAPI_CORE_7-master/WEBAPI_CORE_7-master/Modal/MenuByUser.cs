﻿using LearnAPI.Repos.Models;

namespace LearnAPI.Modal
{
    public class MenuByUser
    {
        public string  code { get; set; }
        public List<TblUserPermission> ListChild { get; set; }
    }
}