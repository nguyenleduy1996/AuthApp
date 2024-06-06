using LearnAPI.Modal;
using LearnAPI.Service;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace LearnAPI.Container
{
    public class EmailService : IEmailService
    {
        private readonly EmailSettings emailSettings;
        public EmailService(IOptions<EmailSettings> options) {
          this.emailSettings = options.Value;
        }
        public async Task SendEmail(Mailrequest mailrequest)
        {
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(emailSettings.Email);
            email.To.Add(MailboxAddress.Parse(mailrequest.Email));
            email.Subject=mailrequest.Subject;
            var builder=new BodyBuilder();
            builder.HtmlBody = mailrequest.Emailbody;
            email.Body = builder.ToMessageBody();

            using var smtp = new SmtpClient();
            try
            {
                await smtp.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                await smtp.AuthenticateAsync("nguyenleduy1996@gmail.com", "ghed dtyi qwlw uiwp");
                await smtp.SendAsync(email);
            }
            catch (MailKit.Security.AuthenticationException ex)
            {
                Console.WriteLine($"Authentication failed: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
            finally
            {
                await smtp.DisconnectAsync(true);
            }

        }
    }
}
