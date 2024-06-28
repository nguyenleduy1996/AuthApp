using LearnAPI.Repos.Models;

namespace LearnAPI.Modal
{
    public class MenuByUser
    {
        public string  code { get; set; }
        public string  icon { get; set; }
        public List<ListChild> ListChild { get; set; }
    }


    public class ListChild
    {
        public string permission { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string url { get; set; }
    }
}
