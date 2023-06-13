namespace WalletWatcher.Model
{
    public class BlackJack
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string PassWord { get; set; }
        public int HighScore { get; set; }
        public int TimesPlayed { get; set; }
        public BlackJack()
        {
            Id = Guid.NewGuid();
        }


        public BlackJack(string userName, string passWord, int highScore, int timesPlayed) : this()
        {
            UserName = userName;
            PassWord = passWord;
            HighScore = highScore;
            TimesPlayed = timesPlayed;
        }
    }

}