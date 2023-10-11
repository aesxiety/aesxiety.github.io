<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Formulir</title>
    <link rel="stylesheet" href="./styles/styles-process.css"/>
</head>
<body>
    <div class="background"></div>
    <div class="popup">
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $formData = array();

                // Iterasi melalui data POST yang diterima dari formulir
                foreach ($_POST as $key => $value) {
                    if ($key !== "submit") {  
                        $formData[$key] = $value;
                    }
                }

                echo "<div class='validasi-berhasil' >";
                echo "<p>Data diri Anda telah diterima.</p>";
                echo "</div>";

                // menampilkan data dalam bentuk tabel
                echo "<div class='result'>";
                echo "<table>";
                echo "<tr><th colspan='2'>Data yang tersimpan</th></tr>";
                
                foreach ($formData as $key => $value) {
                    echo "<tr>";
                    echo "<td><strong>$key:</strong></td>";
                    echo "<td>$value</td>";
                    echo "</tr>";
                }
                
                echo "</table>";
                echo "</div>";
            } else {
                header("formkredit.php");
                exit();
            }
        ?>

        <div class="container">
            <p>Terima kasih telah melakukan pengajuan.<br>
            Sales akan menghubungi anda dengan segera</p>
            <button onclick="kembaliKeIndex();">Kembali ke Beranda</button>
        </div>
    </div>

    <script>
    function kembaliKeIndex() {
        window.location.href = 'index.html'; // Ganti 'index.html' dengan nama file halaman beranda Anda
    }
    </script>
</body>
</html>
